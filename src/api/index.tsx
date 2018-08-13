const userData = [
  { name: "Bob", country: "America" },
  { name: "Cate", country: "England" },
  { name: "Bob", country: "Canada" },
  { name: "Taro", country: "Japan" }
];

const searchUsername = (name: string) => {
  return new Promise<string>(
    (resolve: (value?: string) => void, reject: (err?: any) => void) => {
      const result: any = [];
      userData.forEach((i: any) => {
        if (i.name === name) {
          result.push(i);
        }
      });
      if (result.length === 0) {
        reject(new Error("該当するユーザーは存在しません"));
      } else {
        resolve(result);
      }
    }
  );
};

export const inquireDatabase = (
  name: string,
  callback: (x: string) => void
) => {
  return searchUsername(name)
    .then(result => {
      callback(result);
    })
    .catch(result => {
      callback(result);
    });
};
