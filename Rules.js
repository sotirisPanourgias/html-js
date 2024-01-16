

document.addEventListener('DOMContentLoaded', function () {
    var registrationForm = document.getElementById('registrationForm');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var usernameInput = document.getElementById('username');
    var phone = document.getElementById('phone');
    // Προσπαθούμε να εκτελέσουμε τους κανόνες επικύρωσης
   
  
    registrationForm.addEventListener('submit', function (event) {
      if (!isPasswordValid() || !validateForm()||!Gphone()) {
        event.preventDefault();
      }
    });
  
    function isPasswordValid() {
      var password = passwordInput.value;
      var confirmPassword = confirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        alert('Οι κωδικοί πρόσβασης δεν ταιριάζουν.');
        passwordInput.classList.add('error-input');
        passwordInput.classList.add('errormessage');
       confirmPasswordInput.classList.add('error-input');
        confirmPasswordInput.classList.add('errormessage');
        return false;
      }
  
      if (password.length < 8) {
        alert('Ο κωδικός πρόσβασης πρέπει να έχει τουλάχιστον 8 χαρακτήρες.');
        passwordInput.classList.add('error-input');
        passwordInput.classList.add('errormessage');
        confirmPasswordInput.classList.add('error-input');
        confirmPasswordInput.classList.add('errormessage');

        return false;
      }
      // Αν το username είναι έγκυρο, αφαιρούμε την κλάση error-input
      passwordInput.classList.remove('error-input');
      passwordInput.classList.remove('errormessage');
      confirmPasswordInput.classList.remove('error-input');
      confirmPasswordInput.classList.remove('errormessage');
      return true;
    }

    // Συνάρτηση επικύρωσης
    function validateForm() {
      // Προσθέτουμε τους ελέγχους εδώ
      var isUsernameValid = isLatinUsername();
      // Εμφάνιση μηνύματος λάθους αν δεν είναι έγκυρο
      if (!isUsernameValid) {
        
        alert('Το όνομα χρήστη πρέπει να περιέχει μόνο λατινικούς χαρακτήρες και να ξεκινάει με ένα γράμμα.');
        usernameInput.classList.add('error-input');
        usernameInput.classList.add('errormessage') 
      }else{
        // Αν το username είναι έγκυρο, αφαιρούμε την κλάση error-input
          usernameInput.classList.remove('error-input');
          usernameInput.classList.remove('errormessage') ;
      }

      // Επιστροφή true μόνο αν όλοι οι έλεγχοι είναι έγκυροι
      return isUsernameValid;
    }
    // Επικύρωση του ονόματος χρήστη
    function isLatinUsername() {
      
      var usernameValue = usernameInput.value;

      // Έλεγχος αν περιέχει μόνο λατινικούς χαρακτήρες και ξεκινάει με ένα γράμμα
      var latinRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
      var isValid = latinRegex.test(usernameValue);
      

     
      // Επιστροφή του αποτελέσματος
      return isValid;
    }
    
  
  function Gphone(){
      
      var pvalue = phone.value;
      var dRegex = /^69\d{8}$/;   //πρεπει να ξεκιναει απο 69 και να περιεχεται απο 10 ψηφια
      var validPhone = dRegex.test(pvalue);       // αποτελεσμα 
      if(!validPhone){
        alert('Το τηλεφωνο πρεπει να περιεχει 10 αριθμους κι να ξεκιναει με 69');
        phone.classList.add('error-input');
        phone.classList.add('errormessage') ;

      }else{
        phone.classList.remove('error-input');
        phone.classList.remove('errormessage');
      }
      return validPhone;
  }

  
    
    


  });
  