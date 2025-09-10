import formStyles from "../styles/form.module.css";
import utilStyles from "../styles/util.module.css";

function Form() {
	return (
		<div className={formStyles.form}>
			<div className={formStyles.formRow}>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>

				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<select className={utilStyles.textInput}>
						<option value="">Select an option</option>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
					</select>
				</div>

				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>

				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
			</div>
			<div className={formStyles.formRow}>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
			</div>
			<div className={formStyles.formRow}>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formInputContainer}>
					<label className={utilStyles.label}>Label</label>
					<input
						type="text"
						placeholder="Enter text"
						className={utilStyles.textInput}
					/>
				</div>
				<div className={formStyles.formRow}>
					<div className={formStyles.formInputContainer}>
						<label className={utilStyles.label}>Label</label>
						<input
							type="text"
							placeholder="Enter text"
							className={utilStyles.textInput}
						/>
					</div>
					<div className={formStyles.formInputContainer}>
						<label className={utilStyles.label}>Label</label>
						<input
							type="text"
							placeholder="Enter text"
							className={utilStyles.textInput}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Form;
