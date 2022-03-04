import React from 'react';
import UpdateButton from './updateButton';
import DeleteButton from './deleteButton';
import { connect } from 'react-redux';

const ProfileToolsList = (props) => {

    const toolList = props.tools.map(tool => {
        return(
            <li key={tool.id} className="profile-tools-list-item">
                {tool.name}
                <UpdateButton tool={tool} currentUserId={props.currentUserId} />
                <DeleteButton tool={tool} currentUserId={props.currentUserId} parentUrl={props.parentUrl} />
            </li>
        )
    })

    return (
        <div className="profile-tools-list">
            {toolList}
        </div>
    )


}

const mapStateToProps = state => {
    return {
        currentUserId: state.currentUser.id,
    }
}

export default connect(mapStateToProps)(ProfileToolsList);