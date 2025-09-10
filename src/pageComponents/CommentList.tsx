import { memo } from "react";
import utilStyles from "../styles/util.module.css";
import { ICommentItem } from "../interfaces/ICommentItem";

interface CommentListProps {
	comments: ICommentItem[];
}

function CommentList({ comments }: CommentListProps) {
	console.log("# of comments: ", comments.length);
	return (
		<>
			<div>
				<table className={utilStyles.table}>
					<thead>
						<tr>
							<th className={utilStyles.th}>Name</th>
							<th className={utilStyles.th}>Body</th>
						</tr>
					</thead>
					<tbody>
						{comments.map((comment) => (
							<>
								<tr key={comment.id}>
									<td className={utilStyles.th}>
										{comment.name}
									</td>
									<td className={utilStyles.th}>
										{comment.body}
									</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default memo(CommentList);
