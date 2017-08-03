import { createChannelMessageRequest } from '../utils';
import { ChannelEventService } from './channel-events';
import { 
    Visit
} from '../../common';

export class VisitService {
    /** Fetches events for the specified channel id */
    static fetch(channelId: number) {
        return ChannelEventService.fetch(channelId)
            .then((response:any) => { 
                let matches = response.rows.filter((row:any) =>{
                    return row[0] === 4602455549815028
                })

                let visitMatches = matches.filter((match:any) =>{
                    return match[5] === 'visit_record'
                })
                return visitMatches;
            })
    }

    /** Posts a visit_created event message to the specified channel */
    static createVisit(visit: Visit, channelId: number) {
        const message = createChannelMessageRequest<Visit>('visit_created', channelId, visit);

        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }

    /** Posts a visit_scheduled event message to the specified channel */
    static scheduleVisit(visitId: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_scheduled', channelId, {
            related_visit_id: visitId
        });

        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_processed event message to the specified channel */
    static processVisit(visitId: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_processed', channelId, {
            related_visit_id: visitId
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_finalized event message to the specified channel */
    static finalizeVisit(visitId: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_finalized', channelId, {
            related_visit_id: visitId
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_finalized event message to the specified channel */
    static cancelVisit(visitId: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_cancelled', channelId, {
            related_visit_id: visitId
        });

        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_updated event message to the specified channel */
    static updateVisit(visitId: string, channelId: number, changes: object) {
        const message = createChannelMessageRequest<{}>(
            'visit_updated', 
            channelId, 
            Object.assign({}, changes, { related_visit_id: visitId })
        );

        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_deleted event message to the specified channel */
    static deleteVisit(visitId: string, reason: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_deleted', channelId, {
            related_visit_id: visitId,
            reason: reason
        });

        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_assigned event message to the specified channel */
    static assign(visitId: string, assigneeId: number, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_assigned', channelId, {
            related_visit_id: visitId,
            assignee_id: assigneeId
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_unassigned event message to the specified channel */
    static unassign(visitId: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_unassigned', channelId, {
            related_visit_id: visitId
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_follow_up_created event message to the specified channel */
    static createFollowUp(visitId: string, onDate: Date, assigneeId: number, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_follow_up_created', channelId, {
            related_visit_id: visitId,
            assignee_id: assigneeId,
            on_date: onDate
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
    
    /** Posts a visit_follow_up_cancelled event message to the specified channel */
    static cancelFollowUp(visitId: string, onDate: Date, assigneeId: number, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_follow_up_cancelled', channelId, {
            related_visit_id: visitId,
            assignee_id: assigneeId,
            on_date: onDate
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }

    /** Posts a visit_follow_up_deleted event message to the specified channel */
    static deleteFollowUp(visitId: string, onDate: Date, assigneeId: number, reason: string, channelId: number) {
        const message = createChannelMessageRequest<{}>('visit_follow_up_deleted', channelId, {
            related_visit_id: visitId,
            assignee_id: assigneeId,
            on_date: onDate,
            reason: reason
        });
        
        return ChannelEventService.post(message)
            .then(json => {
                return {/* TODO: Map response */};
            });
    }
}