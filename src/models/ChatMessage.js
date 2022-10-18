import moment from 'moment';

export default class ChatMessage {
    constructor(chatMessage = {}) {
        this.rfqId = chatMessage.rfq_id;
        this.isSeeker = chatMessage.is_seeker;
        this.author = chatMessage.sender_id;
        this.message = chatMessage.message;
        this.at = chatMessage.created;
        this.id = chatMessage.chat_id;
    }
}