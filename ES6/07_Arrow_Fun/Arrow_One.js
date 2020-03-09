const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Sqad",
  teamSummary: function() {
    return this.members.map(member => {
      //Arrow function don't have it's own this, it takes this from its surrounding
      //Due to above reason, we won't lose the reference of this
      return `${member} is on team ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());
