import { memo } from "react";
import utilStyles from "../styles/utilStyles.module.css";
import commentListStyles from "../styles/commentListStyles.module.css";
import { ICommentItem } from "../interfaces/ICommentItem";
import { ISearchBoxStyles, SearchBox } from "@fluentui/react/lib/SearchBox";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";



interface CommentListProps {
	comments: ICommentItem[];
}

function CommentList({ comments }: CommentListProps) {
	return (
		<>
			
			<div className={utilStyles.container}>
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
