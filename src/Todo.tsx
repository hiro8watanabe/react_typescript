import { TodoType } from "./types/todo";

export const Todo = (
  // props: Pick<TodoType, "userId" | "title" | "completed">
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = true } = props;
  const conpleteMark = completed ? "[完]" : "[未]";
  return <p>{`${conpleteMark}${title}(ユーザー:${userId})`}</p>;
};
