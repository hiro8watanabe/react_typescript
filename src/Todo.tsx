type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = true } = props;
  const conpleteMark = completed ? "[完]" : "[未]";
  return <p>{`${conpleteMark}${title}(ユーザー:${userId})`}</p>;
};
