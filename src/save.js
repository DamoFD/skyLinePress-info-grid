/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
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
