export default function requestImitator(delay = 1500, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), delay);
  });
}
