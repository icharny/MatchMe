var userID;
var listOfFriends;

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1660904827469149',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    getTaggableFriends();
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.

    FB.login(function(response){
      getTaggableFriends();
    }, {scope: 'publish_actions'});
  }
}

function getTaggableFriends() {
  var response = FB.getAuthResponse();
  // console.log(response);
  userID = response.userID;
  FB.api(
    "/me/taggable_friends",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        listOfFriends = response.data.sort(function(a, b){
          var keyA = a.name.toLowerCase();
          var keyB = b.name.toLowerCase();
          // Compare the 2 names
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0;
        });

        var select = document.getElementById("friends");
        if (listOfFriends.length > 0) {
          select.disabled = false;
          var option = document.createElement('option');
          option.text = "(select all)";
          option.value = 0;
          select.appendChild(option);
          for(var i = 0; i < listOfFriends.length; i++) {
            option = document.createElement('option');
            option.text = listOfFriends[i].name;
            option.value = listOfFriends[i].id;
            select.appendChild(option);
          }
        } else {
          select.disabled = true;
          var option = document.createElement('option');
            option.text = "No friends :-(";
            select.appendChild(option);
        }
      } else {
        select.disabled = true;
        var option = document.createElement('option');
          option.text = "No friends :-(";
          select.appendChild(option);
      }
    }
  );
}