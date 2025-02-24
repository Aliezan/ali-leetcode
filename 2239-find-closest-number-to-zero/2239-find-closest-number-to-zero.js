var findClosestNumber = function(nums) {
    let closest = nums[0];
    for (i = 1; i < nums.length; i++) {
        if (Math.abs(closest) > Math.abs(nums[i])) {
            closest = nums[i]
        }

        if (closest < 0 && Math.abs(closest) === nums[i]) {
            closest = Math.abs(closest)
        }
    }
    return closest
};