// @flow
import React from 'react';
import styles from './FeatureTourPanelContent.scss';
import { Header5, ParagraphMd } from '../Type/index';
import Button from '../Button';
import ButtonDialogClose from '../ButtonDialogClose';

const displayName = 'FeatureTourPanelContent';

type Props = {
    children: React$Element<*>,
    dismissButtonLabel: string,
    headerText?: string,
    onDismissClick: ()=> void,
    primaryButtonProps?: Object,
    dismissButtonProps?: Object,
};

const FeatureTourPanelContent = ({
    children,
    dismissButtonLabel,
    headerText,
    onDismissClick,
    primaryButtonProps,
    dismissButtonProps,
    ...filteredProps
}: Props): React$Element<*> => {

    const PrimaryButton = primaryButtonProps && (
        <Button
            {...primaryButtonProps}
            format="lightTransparent"
            size="md"
            autoWidth="xs"
        />
    );

    return (
            <div
                {...filteredProps}
                className={styles.FeatureTourPanelContent}
            >
                <ButtonDialogClose
                    {...dismissButtonProps}
                    onClick={onDismissClick}
                    buttonTitle={dismissButtonLabel}
                    className={styles.DismissButton}
                />
                {headerText && <Header5 format="light">{headerText}</Header5>}
                    <ParagraphMd
                        element="div"
                        format="light"
                    >
                        {children}
                    </ParagraphMd>
                {PrimaryButton}
            </div>
    );
};

FeatureTourPanelContent.displayName = displayName;

export default FeatureTourPanelContent;
