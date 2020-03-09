const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Sqad",
  teamSummary: function() {
    //This to get the reference of this and grab it in that
    //Else using this inside the function it will throw error
    var that = this;
    return this.members.map(function(member) {
      return `${member} is on team ${that.teamName}`;
    });
  }
};

console.log(team.teamSummary());
