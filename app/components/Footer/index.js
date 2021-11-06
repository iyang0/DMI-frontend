import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.byMessage}
          values={{
            boilerplate: (
              <A href="https://github.com/react-boilerplate/react-boilerplate">
                React Boilerplate
              </A>
            ),
          }}
        />
      </section>
      <section>
        <FormattedMessage
          {...messages.forMessage}
          values={{
            for: <A href="https://www.dovenmuehle.com/">Dovenmuehle</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
