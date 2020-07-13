const jokeTypeForm = document.querySelector("#joke-form");

const handleChange = (e) => {
    jokeTypeForm.submit()
    fetch(`/make-me-laugh`)
}


