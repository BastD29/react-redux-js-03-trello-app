import React, { Component } from 'react';
import EditButtons from './EditButtons';
import TextareaAutosize from 'react-textarea-autosize';

export default class CardEditor extends Component {
    state = {
        text: this.props.text || ""
    }

    handleChangeText = event => this.setState({text: event.target.value});

    onEnter = e => {
        const {text} = this.state;

        if (e.keyCode === 13){
            e.preventDefault();
            this.props.onSave(text);
        }
    }

    render() {
        const {onSave, onCancel, adding, onDelete} = this.props;
        const {text} = this.state;

        return (
        <div className='Edit-Card'>
            <div className='Card'>
                <TextareaAutosize
                    autoFocus
                    className="Edit-Card-Textarea"
                    placeholder="Enter the text for this card"
                    value={text}
                    onChange={this.handleChangeText}
                    onKeyDown={this.onEnter}
                />
            </div>
            <EditButtons
                handleSave={() => onSave(text)}
                saveLabel={adding ? "Add card" : "Save"}
                handleDelete={onDelete}
                handleCancel={onCancel}
            />
        </div>
        )
    }
}
