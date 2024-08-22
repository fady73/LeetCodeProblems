Given an integer array `nums`, return *the **third distinct maximum** number in this array. If the third maximum does not exist, return the **maximum** number*.

**Example 1:**

<pre><strong>Input:</strong> nums = [3,2,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
</pre>

**Example 2:**

<pre><strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
</pre>

**Example 3:**

<pre><strong>Input:</strong> nums = [2,2,3,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
</pre>

**Constraints:**

* `1 <= nums.length <= 10<sup>4</sup>`
* `-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1`
