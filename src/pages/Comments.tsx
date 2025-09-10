/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import CommentList from "../pageComponents/CommentList";
import { ICommentItem } from "../interfaces/ICommentItem";
import utilStyles from "../styles/utils.module.css";
import commentStyles from "../styles/commentStyles.module.css";
import {
	ISearchBoxStyles,
	IStackTokens,
	SearchBox,
	Stack,
} from "@fluentui/react";

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

function Comments() {
	const [comments, setComments] = useState<ICommentItem[]>([]);
	const originalComments = useRef<ICommentItem[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then((response) => response.json())
			.then((comments) => {
				setComments(comments);
				originalComments.current = comments;
			});
	}, []);

	const filterComments = (searchText: string | undefined) => {
		console.log("searchText", searchText);
		setComments(
			originalComments.current.filter((comment) => {
				if (!searchText) return true;
				const searchLower = searchText.toLowerCase();
				return (
					comment.body.toLowerCase().includes(searchLower) ||
					comment.name.toLowerCase().includes(searchLower)
				);
			})
		);
	};

	const resetComments = () => {
		setComments(originalComments.current);
	};

	return (
		<div className={utilStyles.container}>
			<Stack tokens={stackTokens}></Stack>
			<SearchBox
				className={commentStyles.SearchBox}
				// styles={searchBoxStyles}
				placeholder="Search"
				// onSearch={(newValue) => console.log("value is " + newValue)}
				onChange={(_, newValue: string) => filterComments(newValue)}
				onClear={resetComments}
			/>
			<CommentList comments={comments} />
			<br></br>
		</div>
	);
}

export default Comments;
