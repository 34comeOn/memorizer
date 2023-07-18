import { WarningOutlined } from "@ant-design/icons";
import { notification } from "antd";
import variables from '../../sass/variables.module.scss';

export const useWarningNotification = (title: string) => {
    const [api, contextHolder] = notification.useNotification();
    
    const openNotification = (descriptionText: string) => {
        api.info({
            message: title,
            description: descriptionText,
            placement: 'top',
            role: 'alert',
            icon: <WarningOutlined style={{ color: variables.colorError, paddingTop: '5px' }} rev={undefined} />,
        });
    };

    return [contextHolder, openNotification]
}