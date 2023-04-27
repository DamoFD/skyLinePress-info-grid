/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
} from "@wordpress/block-editor";
import { Panel, PanelBody, TextControl, Button } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<Panel>
					{[1, 2, 3].map((index) => (
						<PanelBody
							key={`column-${index}`}
							title={`Info-Grid Column-${index}`}
							initialOpen={index === 1}
						>
							<div className="editor-image-selector">
								<label className="blocks-base-control__label">Image</label>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({ [`img${index}`]: media.url })
									}
									allowedTypes={["image"]}
									value={attributes[`img${index}`]}
									render={({ open }) => (
										<Button isPrimary onClick={open}>
											{attributes[`img${index}`]
												? "Change Image"
												: "Select Image"}
										</Button>
									)}
								/>
								{attributes[`img${index}`] && (
									<img
										src={attributes[`img${index}`]}
										alt="Preview"
										style={{
											maxWidth: "100%",
											height: "auto",
											marginTop: "10px",
										}}
									/>
								)}
							</div>
							<TextControl
								className="blocks-base-control__input"
								label={"Heading"}
								value={attributes[`heading${index}`]}
								onChange={(val) => setAttributes({ [`heading${index}`]: val })}
							/>
							<TextControl
								className="blocks-base-control__input"
								label={"Text"}
								value={attributes[`paragraph${index}`]}
								onChange={(val) =>
									setAttributes({ [`paragraph${index}`]: val })
								}
							/>
						</PanelBody>
					))}
				</Panel>
			</InspectorControls>

			<div className="skyLine-container">
				<div className="skyLine-block">
					<img className="skyLine-block__img" src={attributes.img1} />
					<h2 className="skyLine-block__header">{attributes.heading1}</h2>
					<p className="skyLine-block__text">{attributes.paragraph1}</p>
				</div>
				<div className="skyLine-block">
					<img className="skyLine-block__img" src={attributes.img2} />
					<h2 className="skyLine-block__header">{attributes.heading2}</h2>
					<p className="skyLine-block__text">{attributes.paragraph2}</p>
				</div>
				<div className="skyLine-block">
					<img className="skyLine-block__img" src={attributes.img3} />
					<h2 className="skyLine-block__header">{attributes.heading3}</h2>
					<p className="skyLine-block__text">{attributes.paragraph3}</p>
				</div>
			</div>
		</div>
	);
}
