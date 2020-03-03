'use strict'
age.onblur = function (){
    
   if (isNaN(this.value)||(this.value <1) || (this.value > 100)) {

		age.value = 'Only Number from 1 to 100';
		age.focus();

	} else {

		this.classList.remove('error');
		this.classList.add('accepted');
		home.focus();

	}
}
Age.onblur = function (){
    
   if (isNaN(this.value)||(this.value <1) || (this.value > 100)) {

		Age.value = 'Only Number from 1 to 100';
		Age.focus();

	} else {

		this.classList.remove('error');
		this.classList.add('accepted');
		Home.focus();

	}
}