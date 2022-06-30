const buildTeam = team => {

    const generateManagerCard = manager => {
        return
        <div class="card text-center">
    <div class="card-header">
      Team Manager
    </div>
    <div class="card-body">
      <h5 class="card-title">${manager.email}</h5>
      <p class="card-text">Office Number</p>
      <a href="mailto:${manager.email}" class="btn btn-primary">Send Email</a>
    </div>
    <div class="card-footer text-muted">
      ${manager.id}
    </div>
  </div>
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    )

    return html.join("") 
} 