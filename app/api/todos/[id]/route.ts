import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params: { id } }: Props) {
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo = await res.json();

  if (!todo.id) return NextResponse.json({ message: 'Todo id is required' });

  return NextResponse.json(todo);
}
