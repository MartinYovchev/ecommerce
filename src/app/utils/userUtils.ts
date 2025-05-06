interface User {
  name: string;
  email: string;
  password: string;
}

const USERS_STORAGE_KEY = 'users';

export const saveUser = async (user: User): Promise<boolean> => {
  try {
    const users = getUsers();

    if (users.some((u) => u.email === user.email)) {
      return false;
    }

    users.push(user);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error saving user:', error);
    return false;
  }
};

export const getUsers = (): User[] => {
  try {
    const data = localStorage.getItem(USERS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
};

export const validateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user || null;
  } catch (error) {
    console.error('Error validating user:', error);
    return null;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const requestPasswordReset = async (email: string): Promise<boolean> => {
  try {
    // TODO: Replace with actual API call
    // This is a mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate successful request
    return true;
  } catch (error) {
    console.error('Password reset request failed:', error);
    throw error;
  }
};
