import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsAnalyticsitemsApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Analyticsitems API',
                name: 'N8nDevAzureApplicationinsightsAnalyticsitemsApi',
                icon: { light: 'file:./azure-applicationinsights-analyticsitems-api.png', dark: 'file:./azure-applicationinsights-analyticsitems-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure App Insights client for saved items.',
                defaults: { name: 'Azure Applicationinsights Analyticsitems API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsAnalyticsitemsApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
