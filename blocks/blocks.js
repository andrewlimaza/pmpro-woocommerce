const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

registerBlockType('pmprowoo/test', {
    title: 'Text Input Block',
    icon: 'editor-textcolor',
    category: 'common',
    attributes: {
        text: {
            type: 'string',
            default: '',
        },
    },
    edit: (props) => {
        const { attributes, setAttributes } = props;

        const onChangeText = (newText) => {
            setAttributes({ text: newText });
        };

        return (
            <div>
                <TextControl
                    label="Text Input"
                    value={attributes.text}
                    onChange={onChangeText}
                />
            </div>
        );
    },
    save: () => null,
});