import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApplicationinsightsAnalyticsitemsApiApi implements ICredentialType {
        name = 'N8nDevAzureApplicationinsightsAnalyticsitemsApiApi';

        displayName = 'Azure Applicationinsights Analyticsitems API';

        icon: Icon = { light: 'file:../nodes/AzureApplicationinsightsAnalyticsitemsApi/azure-applicationinsights-analyticsitems-api.png', dark: 'file:../nodes/AzureApplicationinsightsAnalyticsitemsApi/azure-applicationinsights-analyticsitems-api.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Applicationinsights Analyticsitems API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
