import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect } from 'react';

export default function Writer(){
	useEffect(()=>{
		return (
			<Editor 
			previewStyle='vertical' height='100em' autofocus={false}
			/>
			);
	})

	return (
	<Editor 
	previewStyle='vertical' height='100em' autofocus={false}
	/>
	);
}