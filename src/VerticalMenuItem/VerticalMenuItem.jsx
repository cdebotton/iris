// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItem.scss';
import KEY_CODES from '../globals/js/constants/KEY_CODES';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import VerticalMenuContextualMenuPanel from '../VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import DotsMenuIcon from '../icons/dots-menu.svg';


type Props = {
    className?: string,
    children: React$Element<*>,
    href?: string,
    to?: string,
    linkActionIcon?: React$Element<*>,
    labelIcon?: React$Element<*>,
    labelIconActive?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle';
    nestedInteractionContent?: React$Element<*>,
    nestedInteractionMenuSize?: 'sm' | 'md' | 'lg',
    label: React$Element<*> | string,
    menuPanelTooltip?: string,
    onClick?: Function,
    onNestedItemClick?: Function,
    showNestedByDefault?: boolean,
    nestedButtonClass?: string,
    nestedButtonLabel?: string,
    truncateLabel?: boolean,
};

class VerticalMenuItem extends React.Component {
    static defaultProps = {
        nestedInteractionMenuSize: 'md',
    };;

    constructor(props: Props) {
        super(props);
        this.state = {
            showNestedInteraction: props.showNestedByDefault || false,
            nestedMenuOpen: false,
            subMenuOpen: false,
        };
    }

    state: Object;

    componentDidMount() {
        if (this.props.nestedInteractionContent) {
            this._bindListeners();
        }
    }

    props: Props;

    _bindListeners = () => {
        // if a user is using a touch device or keyboard nav, we unhide the menu options.

        document.addEventListener(
                'touchstart',
                this._setToNoHover
            );

        document.addEventListener(
                'keydown',
                this._checkForTab
            );
    }

    _checkForTab = (e: Event) => {
        if (e.keyCode === KEY_CODES.tab) {
            this._setToNoHover();
        }
    }

    _setToNoHover = () => {
        this.setState({
            showNestedInteraction: true,
        });

        document.removeEventListener(
                'touchstart',
                this._setToNoHover
            );

        document.removeEventListener(
                'keydown',
                this._checkForTab
            );
    }

    _handleMouseOut = () => {
        this.setState({
            showNestedInteraction: this.state.nestedMenuOpen,
        });
    }

    _handleMouseOver = () => {
        this.setState({
            showNestedInteraction: true,
        });
    }

    _handlePanelOpen = () => {
        this.setState({
            nestedMenuOpen: true,
            showNestedInteraction: true,
        });
    }

    _handlePanelClose = () => {
        this.setState({
            nestedMenuOpen: false,
            showNestedInteraction: false,
        });
    }


    render() {
        const {
            children,
            className,
            menuPanelTooltip,
            nestedButtonClass,
            nestedButtonLabel,
            nestedInteractionContent,
            nestedInteractionMenuSize,
            onNestedItemClick,
            ...filteredProps
        } = this.props;

            // className builder
        const componentClass = classNames(
            styles.Wrapper,
            styles.textOverrides,

            className
        );

        const linkWrapperClass = classNames(
            styles.LinkStyleWrapper,
        );

        const nestedMenuClass = classNames(
            styles.NestedInteractionWrapper,
            styles.nestedMenuOffset,
            (this.state.showNestedInteraction ? styles.isShowing : null),
        );

        const NestedMenuButton = (
                <ButtonIconOnly
                    icon={<DotsMenuIcon title={nestedButtonLabel}/>}
                    format="dark"
                    size="sm"
                    isButtonElement={false}
                    className={nestedButtonClass}
                />
            );

        const NestedInteractionComponent = nestedInteractionContent ? (
                <div
                    className={nestedMenuClass}

                >
                    <VerticalMenuContextualMenuPanel
                        tooltipText={menuPanelTooltip}
                        onClose={this._handlePanelClose}
                        onOpen={this._handlePanelOpen}
                        buttonElement={NestedMenuButton}
                        onClick={onNestedItemClick}
                        size={nestedInteractionMenuSize}
                    >
                    {nestedInteractionContent}
                </VerticalMenuContextualMenuPanel>
                </div>
            ) : null;

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                    onMouseOver={this._handleMouseOver}
                    onMouseOut={this._handleMouseOut}
                >
                    <div className={linkWrapperClass}>
                        {children}
                    </div>
                    {NestedInteractionComponent}
                </div>
        );
    }
}

export default VerticalMenuItem;
