/*
このコードは、comments.jsファイルからコメントを取得するための関数です。この関数は、@sveltejs/kitライブラリのjson（）メソッドを使用して、comments.jsファイルからコメントをJSONオブジェクトとして返します。
*/

import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET() {
  return json(comments); //@sveltejs/kitライブラリのjson（）メソッドを使用

  // -----以下はjson()メソッドを使用しない場合のコード
  
  // return new Response(JSON.stringify(comments),{
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  }

  export async function POST(requenstEvent) {
    const { request } = requenstEvent;
    const { text } = await request.json();
    const newComment = {
      id: comments.length + 1,
      text
    };
    comments.push(newComment);
    return json(newComment, { status: 201});
  }
  