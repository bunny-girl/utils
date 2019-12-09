const msleep = n => {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
const sleep = (n=1) => {
	msleep(n*1000);
}

module.exports = {
    sleep,
}