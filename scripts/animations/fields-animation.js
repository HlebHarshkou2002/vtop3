let fields = document.querySelectorAll('.field-animation');

console.log(fields)
if(fields.length > 0) {

	for(let i = 0; i < fields.length; i++) {
		setTimeout(() => {
			fields[i].classList.add('active-animation');
		}, i * 1000)
	}
	// fields.forEach((field) => {
	// 	field.classList.add('active-animation');
	// })
}