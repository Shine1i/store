export default async function statistics() {
	const dates = generateDates();
	const sevenData = makeRequest(dates.sevenDaysAgo);
	const ondData = makeRequest(dates.oneDayAgo);
	const [seven, one] = await Promise.all([sevenData, ondData]);
	return {
		seven: seven,
		one: one
	};
}

async function makeRequest(then: string) {
	try {
		const data = await fetch('https://api.cloudflare.com/client/v4/graphql', {
			method: 'POST',
			body: query(then),
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.CLOUDFLARE_TOKEN
			}
		});
		if (data.ok) {
			const json = await data.json();
			const uniques = json.data.viewer.zones[0].httpRequests1dGroups.sum.uniq.uniques;
			return uniques as number;
		}
	} catch (err) {
		console.log(err);
	}
	return undefined;
}

const query = function getDates(then: string) {
	return `query{
        viewer{
            zones(filter: { zoneTag: "${process.env.CLOUDFLARE_ZONE_ID}" }){
    
                httpRequests1dGroups(limit:1,filter:{
                    date_geq:"${then}"
                    date_lt:"${formatDate(new Date())}"
                }){
                    uniq{
                        uniques
                    }
    
                }
            
            }
        }  
    }`;
};
function generateDates(): { sevenDaysAgo: string; oneDayAgo: string } {
	// Get the current date and time
	const currentDate = new Date();

	// Create a new date that is 7 days ago
	const sevenDaysAgo = new Date(currentDate);
	sevenDaysAgo.setDate(currentDate.getDate() - 7);

	// Create a new date that is 1 day ago
	const oneDayAgo = new Date(currentDate);
	oneDayAgo.setDate(currentDate.getDate() - 1);

	return {
		sevenDaysAgo: formatDate(sevenDaysAgo),
		oneDayAgo: formatDate(oneDayAgo)
	};
}

function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}
