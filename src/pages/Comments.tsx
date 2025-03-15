import { useEffect, useState } from "react";
import CommentList from "../pageComponents/CommentList";
import { ICommentItem } from "../interfaces/ICommentItem";
import utilStyles from "../styles/utilStyles.module.css";
import { ISearchBoxStyles, IStackTokens, Stack } from "@fluentui/react";

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

function Comments() {
	const [comments, setComments] = useState<ICommentItem[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => response.json())
			.then((comments) => setComments(comments));
	}, []);

	return (
		<div className={utilStyles.container}>
      <Stack tokens={stackTokens}></Stack>
			<SearchBox
				className={commentListStyles.SearchBox}
				// styles={searchBoxStyles}
				placeholder="Search"
				// onSearch={(newValue) => console.log("value is " + newValue)}
        onChange={(e) => }
			/>
			<CommentList comments={comments} />
			<br></br>
		</div>
	);
}

export default Comments;
