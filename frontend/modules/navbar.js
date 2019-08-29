import React , { Component, PropTypes } from 'react'
import { browserHistory} from 'react-router'
import jquery from 'jquery'
import createHistory from "history/createHashHistory"
import Text from './localization/text'
import {
  Input,
  Collapse,
  Navbar as NB,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const history = createHistory();
class Navbar extends React.Component{
        constructor(props) {
                super(props);
                var locale = 'fr-CA';
                if (localStorage.locale)
                        locale = localStorage.locale;
                this.onHome = this.onHome.bind(this);
                this.toggle = this.toggle.bind(this);
                this.onLeave = this.onLeave.bind(this);
                this.onChange = this.onChange.bind(this);
                this.state = {
                  locale: locale,
                  isOpen: false
                };
        }

        componentDidMount(){
        }

        componentWillUnmount(){
        }

        onChange(e) {
                console.debug(e.target.value);
                localStorage.setItem('locale', e.target.value);
                this.state.locale = e.target.value;
                this.setState(this.state);
                this.props.refresh();
        }

        onHome(event){
                event.preventDefault();
                this.toggle();
                history.replace("/");
        }

        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }

        onLeave(e){
                this.setState({
                  isOpen: false
                });
        }
        render(){
                var langs = Text.getLocales().map((locale) =>
                        <option key={locale.id} value={locale.id}>{locale.name}</option>
                  );
                return (
                        <div className='navbars'>
                        <NB className='navs'  dark expand="md" fixed={'top'} onMouseLeave={this.onLeave}>
                          <NavbarBrand ><img className='logo' src='res/drawables/roblab.png' onClick={this.onHome}/></NavbarBrand>
                          <NavbarToggler onClick={this.toggle} />
                          <Collapse isOpen={this.state.isOpen}  navbar>
                          <Nav className="" navbar>
                                  <NavItem>
                                  <NavLink className='home-link' onClick={this.onHome}>{Text.text.nav_home_label}</NavLink>
                                  </NavItem>
                          </Nav>
                            <Nav className="ml-auto" navbar>
                              <NavItem>
                                    <Input type="select" name="locale" id="locale" onChange={this.onChange} value={this.state.locale}>
                                        {langs}
                                    </Input>
                              </NavItem>
                            </Nav>
                          </Collapse>
                        </NB>
                        </div>)
        }
}

module.exports = Navbar;
