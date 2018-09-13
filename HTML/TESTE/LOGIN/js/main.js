initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            if (photoURL === null) {
                document.getElementById("account-name").innerHTML = "Nome: " + displayName + "<br/>";
                document.getElementById("account-picture").innerHTML = "Foto: NÃO POSSUI<br/>";
            }
            else {
                document.getElementById("account-name").innerHTML = "Nome: " + displayName + "<br/>";
                document.getElementById("account-picture").innerHTML = " <img width=5% height=5% src=" + photoURL + ">";

            }
        } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp()
});