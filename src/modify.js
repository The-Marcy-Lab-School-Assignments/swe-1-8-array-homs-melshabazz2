const filterVipUsers = (users, vipUserIdsSet) => {
  return users.filter(user => vipUserIdsSet.has(user.id))
};

const multiplicativeAverage = (nums) => {
  const product = nums.reduce((accumulator, currentNum) => {
    return accumulator * currentNum
  }, 1)
  return product / nums.length

};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};
