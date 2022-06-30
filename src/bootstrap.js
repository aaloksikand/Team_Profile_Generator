const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const makeTeam = team => {

    const generateManagerCard = manager => {
        return `<div class="card text-center">
    <div class="card-header">
      Team Manager
    </div>
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">${manager.officeNumber}</p>
      <a href="mailto:${manager.email}" class="btn btn-primary">Send Email</a>
    </div>
    <div class="card-footer text-muted">
      Employee ID${manager.id}
    </div>
  </div>`
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    )

    const generateEngineerCard = engineer => {
        return `<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-header">
        Engineer
      </div>
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <a href="mailto:${engineer.email}" class="btn btn-primary">Email Me</a>
        <a href="https://www.github.com/${engineer.github}" class="btn btn-primary">My Github</a>
      </div>
      <div class="card-footer text-muted">
      Employee ID${engineer.id}
    </div>
    </div>
  </div>
    </div>`
    }

    html.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
    )

    const generateInternCard = intern => {
        return `<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-header">
        Intern
      </div>
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text">${intern.school}</p>
        <a href="mailto:${intern.email}" class="btn btn-primary">Email Me</a>
      </div>
      <div class="card-footer text-muted">
      Employee ID${intern.id}
    </div>
    </div>
  </div>
    </div>`
    }

    html.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
    )

    return html.join("") 
} 

module.exports= team => {
    return `
    <!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
  <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <title>Team Builder</title>
</head>
${makeTeam(team)}`
}