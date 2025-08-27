const userXP = {};
function addXP(userId, points) {
  userXP[userId]+=points;
}
module.exports = { addXP, userXP };
