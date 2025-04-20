type User = {
  readonly firstName: string;
  lastName?: string | undefined;
  age: number;
  password: string;
}

const User: User = {
  firstName: 'Selim',
  lastName: 'Kerimov',
  age: 20,
  password: '123'
}


// 1) Partial makes all properties of a type T optional, so you don't have to provide every piece of information.
type UserPartial = Partial<User>


// 2) Required does the opposite of Partial<T>: it makes all properties of a type T required.
type RequierdUser = Required<User>


// 3) Pick<T, K> creates a new type by selecting only the properties specified by K from the type T
type PickUser = Pick<User, 'firstName' | 'lastName'>


// 4) Omit<T, K> creates a new type by removing the properties specified by K from the type T.
type OmitUser = Omit<User, 'firstName' | 'lastName'>


// 5) NonNullable<T> removes null and undefined from the type T.
type NonNullableUser = Required<NonNullable<User>>


// 6) Readonly<T> makes all properties of a type T read-only, preventing them from being reassigned after initial assignment.
type ReadOnlyUser = Readonly<User>


// 7) Record
type UserWithSkills = { skills: Record<'javascript' | 'python' | 'typescript', boolean> }

const UserWithSkills: UserWithSkills = {
  skills: {
    javascript: true,
    typescript: true,
    python: false
  }
}


// 8) ReturnType<T> extracts the return type of a function type T.
function func({ a: string , b: number }) {
  return User
}

type ReturnTypeUser = ReturnType<typeof func>


// 9) Awaited<T> gets the type of the value a Promise will resolve to, even with nested Promises.
async function func2() {
  return User
}

type AwaitedUser = Awaited<ReturnType<typeof func2>>


// 10) Parameters<T> extracts the parameter types of a function type T into a tuple type.
type ParametersUser = Parameters<typeof func>


type Users =
| { name: "Selim", age: 20 }
| { name: "John", age: 25 }
| { name: "Peter", age: 30 };


// 11) Extract<T, U> creates a type by selecting the types from T that are assignable to U.
type ExtractUser = Extract<Users, { name: "Selim" }>


// 12) Exclude<T, U> creates a type by removing the types from T that are assignable to U.
type ExcludeUser = Exclude<Users, { name: "Selim" }>


type Fruit = 'Apple' | 'banana'


// 13) Uppercase<StringType>
type UppercaseFruit = Uppercase<Fruit>


// 14) Lowercase<StringType>
type LowercaseFruit = Lowercase<Fruit>


// 15) Capitalize<StringType>
type CapitalizeFruit = Capitalize<Fruit>


// 16) Uncapitalize<StringType>
type UncapitalizeFruit = Uncapitalize<Fruit>