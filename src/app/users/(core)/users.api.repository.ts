class UserApiRepository {
  private origin = process.env.NEXT_PUBLIC_API_URL;
  getAll = (search: string) => {
    const url = new URL(`/api/${search}`, this.origin);
    return fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export const userApiRepository = new UserApiRepository();
