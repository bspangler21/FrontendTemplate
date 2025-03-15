import { useEffect, useState } from "react";
import CommentList from "../pageComponents/CommentList";
import { ICommentItem } from "../interfaces/ICommentItem";

function Comments() {
	const [comments, setComments] = useState<ICommentItem[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => response.json())
			.then((comments) => setComments(comments));
	}, []);

	return (
		<div>
			<CommentList comments={comments} />
		</div>
	);
}

export default Comments;
