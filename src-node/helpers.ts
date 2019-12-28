import { Recipe, RecipeModel } from "./entities/recipe";
import { User, UserModel } from "./entities/user";

export async function seedDatabase() {
  const defaultUser = await new UserModel({
    email: "dio@github.com",
    nickname: "Dio",
    password: "123456",
  } as User).save();

  await RecipeModel.create([
    {
      title: "Recipe 1",
      description: "Desc 1",
      author: defaultUser._id,
      ratings: [
        { value: 2, user: defaultUser._id },
        { value: 4, user: defaultUser._id },
        { value: 5, user: defaultUser._id },
        { value: 3, user: defaultUser._id },
        { value: 4, user: defaultUser._id },
      ],
    },
    {
      title: "Recipe 2",
      author: defaultUser._id,
      ratings: [{ value: 2, user: defaultUser }, { value: 4, user: defaultUser }],
    },
  ] as Recipe[]);

  return {
    defaultUser,
  };
}