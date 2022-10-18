const getAllCookies = () => {
    const pairs = document.cookie.split(";");
    let cookies = {};
    for (let i=0; i<pairs.length; i++){
      let pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair[1]);
    }
    return cookies;
  }
  
  export const setCookie = (cname, cvalue, exdays)=> {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      window.name = JSON.stringify(getAllCookies());
  };
  export const getCookie = (cname)=> {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  };
  const deleteCookie = (name)=> {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  export const storeToken = (token)=> {
      setCookie('teg-session-token', token, 200);
      // setCookie('csrftoken', token, 200);
      setCookie('teg-accounts-session-token', token, 200);
      setCookie('tracking-session-token', token, 200);
  }
  export const getToken = ()=> {
      return getCookie('teg-session-token') || "";
      // return getCookie('teg-accounts-session-token') || "";
      // return "d556142542474904a9d52ed5bd0083c5";
  }
  export const storeCompanyType = (companyType, companyId)=> {
      setCookie('teg-company-type', companyType, 200);
      setCookie('teg-accounts-company-type', companyType, 200);
      // setCookie('teg-accounts-companyId', companyId, 200);
  }
  export const storeCompanyId = (id)=> {
      setCookie('teg-accounts-companyId', id, 200);
  }
  export const getIsSettingsVisible = ()=> {
      return getCookie('teg-settings-visible') || "";
  }
  export const storeUser = (user)=> {
      try {
          setCookie('teg-user', JSON.stringify(user), 200);
      } catch(e) {
          
      }
  }
  export const getUser = ()=> {
      try {
          return JSON.parse(getCookie('teg-user')) || JSON.parse(getCookie('user')) || {}
      } catch(e) {
          return {};
      }
  }
  export const storeIsSettingsVisible = (visibile)=> {
      setCookie('teg-settings-visible', visibile, 200);
  }
  export const getCompanyType = ()=> {
      try {
          return parseInt(getCookie('teg-company-type'));
      } catch(e) {
          return ""
      }
  }
  export const getIsApprover = ()=> {
      return getUser().isApprover;
  }
  
  export const setDashboardActiveView = (activeView)=> {
      setCookie('dashboard-active-view', activeView)
  }
  export const getDashboardActiveView = ()=> {
      try {
          return parseInt(getCookie('dashboard-active-view'));
      } catch(e) {
          return ""
      }
  }
  export const getCompanyName = () => {
      return (getUser().companyName || '');
  }
  
  export const storeLogoutDuration = (time)=> {
        setCookie('sso-logout-duration', time, 200);
    }
    export const getLogoutTimeDuration = () => {
        return getCookie('sso-logout-duration') || "";
    }

  export const deleteToken = ()=> {
      // deleteCookie('csrftoken');
      deleteCookie('teg-user');
      deleteCookie('teg-session-token');
      deleteCookie('teg-company-type');
      deleteCookie('dashboard-active-view');
      deleteCookie('teg-accounts-session-token');
      deleteCookie('teg-accounts-companyId');
      localStorage.setItem('branchDetail', '');
      localStorage.setItem('termsAndConditionsAccepted', false);
      localStorage.setItem('isSSOUser', false);
      localStorage.setItem('teg-sso-session', false);
      localStorage.setItem('sso-session', false);
      localStorage.clear();
      window.name = '';
      location.href = "/";
  }
  
  // Debounce
  
  export function debounce(func, wait, immediate) {
      // 'private' variable for instance
      // The returned function will be able to reference this due to closure.
      // Each call to the returned function will share this common timer.
      var timeout;
    
      // Calling debounce returns a new anonymous function
      return function() {
        // reference the context and args for the setTimeout function
        var context = this,
          args = arguments;
    
        // Should the function be called now? If immediate is true
        //   and not already in a timeout then the answer is: Yes
        var callNow = immediate && !timeout;
    
        // This is the basic debounce behaviour where you can call this 
        //   function several times, but it will only execute once 
        //   [before or after imposing a delay]. 
        //   Each time the returned function is called, the timer starts over.
        clearTimeout(timeout);
    
        // Set the new timeout
        timeout = setTimeout(function() {
    
          // Inside the timeout function, clear the timeout variable
          // which will let the next execution run when in 'immediate' mode
          timeout = null;
          // Check if the function already ran with the immediate flag
        if (!immediate) {
          // Call the original function with apply
          // apply lets you define the 'this' object as well as the arguments 
          //    (both captured before setTimeout)
          func.apply(context, args);
        }
      }, wait);
  
      // Immediate mode and no wait timer? Execute the function..
      if (callNow) func.apply(context, args);
    }
  }