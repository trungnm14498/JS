// var promise = new Promise(
//     //Excutor
//     function(resolve, reject) {

//     }
// );

// promise
//     .then(function() {
//       console.log('Successfully');
//     })
//     .catch(function() {
//         console.log('Failure');
//     })
//     .finally(function() {
//         console.log('Done');
// })

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

//Function
function getCourses(callback) {
    fetch(courseApi)
    .then(function (response) {
        return response.json();
    })
    .then (callback);
}


function createCourse(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
    .then(function(response) {
        response.json();
    })
    // .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
    .then(function(response) {
        response.json();
    })
}

function updateCourse(data, id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + id, options)
    .then(function(response) {
        response.json();
    })
}

function handleModifyCourse(id) {
    showInputCourse(id);
    var saveBtn = document.querySelector('#save');
    console.log(saveBtn);
    saveBtn.style.display = null;
    document.querySelector('input[name="name"]').focus();
    saveBtn.addEventListener('click', function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
        updateCourse(formData, id);
    })
}

function showInputCourse(id) {
    var options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(course) {
        var name = document.querySelector('input[name="name"]');
        var description = document.querySelector('input[name="description"]');
        name.value = course.name;
        description.value = course.description;
    })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <div>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                    <button onclick="handleModifyCourse(${course.id})">Modify</button>
                </div>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
        createCourse(formData);
    }
}