<div class="wpvr-delete-alert-wrapper">
    <!-- <div class="wpvr-delete-confirmation">
        <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="54" height="54" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffa500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9v2m0 4v.01" />
                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
            </svg>
        </span>
        <h3 id="confirm_text"><?php //echo __('Turning On The Video Option Will Erase Your Virtual Tour Data. Are You Sure?', 'wpvr'); ?></h3>
        <ul class="wpvr-delete-confirm-btn">
            <li><button class="btn-default cancel"><?php echo __('Cancel', 'wpvr'); ?></button></li>
            <li>
                <button type="button" class="btn-default yes">
                    <?php //echo __('Yes', 'wpvr'); ?>
                </button>
            </li>
        </ul>
    </div> -->

    <div class="pano-error-wrapper">
        <div class="pano-error-body">
            <span class="cross pano-error-close-btn">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7778 18.7786C14.4819 23.074 7.51728 23.0738 3.22169 18.778C-1.0739 14.4823 -1.0739 7.51769 3.22169 3.22196C7.51728 -1.07378 14.4819 -1.07402 18.7778 3.22143C20.8409 5.28436 22 8.08242 22 11C22 13.9176 20.8409 16.7156 18.7778 18.7786ZM14.9278 8.21857L12.1071 11L14.9278 13.7814C15.0865 13.93 15.1765 14.1376 15.1765 14.355C15.1765 14.5724 15.0865 14.78 14.9278 14.9286C14.7795 15.0756 14.5788 15.1576 14.3699 15.1564C14.1638 15.1556 13.9663 15.0737 13.8199 14.9286L10.9992 12.1079L8.21778 14.9286C8.07143 15.0737 7.8739 15.1556 7.66778 15.1564C7.45893 15.1576 7.2582 15.0756 7.10992 14.9286C6.80528 14.6221 6.80528 14.1272 7.10992 13.8207L9.89135 11L7.10992 8.21857C6.84295 7.90683 6.8609 7.44213 7.15112 7.15191C7.44134 6.8617 7.90604 6.84375 8.21778 7.11071L10.9992 9.89214L13.7806 7.11071C13.9785 6.9058 14.2707 6.82202 14.5471 6.89095C14.8236 6.95988 15.0422 7.17104 15.1207 7.44488C15.1992 7.71872 15.1257 8.01365 14.9278 8.21857ZM4.34363 4.34471C8.02058 0.663508 13.9845 0.656605 17.6699 4.32929C19.4452 6.09842 20.4431 8.50157 20.4431 11.0079C20.4431 13.5141 19.4452 15.9173 17.6699 17.6864C13.9845 21.3591 8.02058 21.3522 4.34363 17.671C0.666691 13.9898 0.666691 8.02591 4.34363 4.34471Z" fill="#A8A7BE"/>
                </svg>
            </span>

            <span class="icon pano-warning">
                <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4802 1.86951L35.4553 24.3914C36.1816 25.5621 36.1816 26.9598 35.4553 28.1305C34.7289 29.3011 33.4278 30 31.9751 30H4.025C2.5722 30 1.2712 29.3011 0.5448 28.1305C-0.1816 26.9598 -0.1816 25.5621 0.5448 24.3914L14.5198 1.86951C15.2462 0.698907 16.5473 0 18 0C19.4527 0 20.7538 0.698841 21.4802 1.86951ZM31.9751 28.0358C32.6647 28.0358 33.2822 27.7041 33.6271 27.1484C33.9719 26.5927 33.9719 25.9291 33.6271 25.3734L19.6521 2.8515C19.3072 2.2958 18.6896 1.96404 18 1.96404C17.3104 1.96404 16.6928 2.2958 16.3479 2.8515L2.37293 25.3734C2.02812 25.9291 2.02812 26.5927 2.37293 27.1484C2.71774 27.7041 3.33537 28.0358 4.025 28.0358H31.9751Z" fill="#FAAC14"/>
                <path d="M18 22C17.4486 22 17 22.4486 17 23C17 23.5514 17.4486 24 18 24C18.5514 24 19 23.5514 19 23C19 22.4486 18.5514 22 18 22Z" fill="#FAAC14"/>
                <rect x="17" y="11" width="2" height="9" fill="#FAAC14"/>
                </svg>
            </span>

            <div class="pano-error-message">
            <h3 id="confirm_text"><?php echo __('Turning On The Video Option Will Erase Your Virtual Tour Data. Are You Sure?', 'wpvr'); ?></h3>
            </div>

        </div>

        <div class="pano-error-footer">
            <ul class="wpvr-delete-confirm-btn">
                <li><button class="cancel"><?php echo __('No', 'wpvr'); ?></button></li>
                <li class="pano-error-close">
                    <button type="button" class="yes">
                        <?php echo __('Yes', 'wpvr'); ?>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
