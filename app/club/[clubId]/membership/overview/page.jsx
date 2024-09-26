import {useMembershipService} from "@/app/Services/MembershipService";

export default function Page({ params }) {
    const { clubId } = params;
    const membershipService = useMembershipService();

    return (
        <div>
            <h1>Membership Overview</h1>
            <p>Club ID: {clubId}</p>
            <p>You have {membershipService.countMembers() } members </p>
        </div>
    )
}