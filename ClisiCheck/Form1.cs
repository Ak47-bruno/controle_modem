﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using System.IO;
using Microsoft.Win32;


using System.Linq;



namespace ClisiCheck
{
    public partial class start : Form
    {
        [DllImport("Gdi32.dll", EntryPoint = "CreateRoundRectRgn")]

        private static extern IntPtr CreateRoundRectRgn
  (
      int nLeftRect,
      int nTopRect,
      int nRightRect,
      int nBottomRect,
      int nWidthEllipse,
      int nHeightEllipse
  );
        private bool dragging = false;
        private Point startPoint = new Point(0, 0);

        public start()
        {
            InitializeComponent();
            progressBar.Value = 0;
           // Region = System.Drawing.Region.FromHrgn(CreateRoundRectRgn(0, 0, Width, Height, 25, 25));
            
        }

        private void start_Load(object sender, EventArgs e)
        {

        }

        private void btnDash_Click(object sender, EventArgs e)
        {
            pnlNav.Height = btnDash.Height;
            pnlNav.Top = btnDash.Top;
            pnlNav.Left = btnDash.Left;
            lblModo.Text = "Escritório";
            //listViewResult.Controls.Clear();
            progressBar.Value = 0;
            progressBar.Text = progressBar.Value.ToString() + "%";
            listBoxResult.Items.Clear();
            btnDash.BackColor = Color.FromArgb(46, 51, 73);
        }

        private void btnCaixa_Click(object sender, EventArgs e)
        {
            pnlNav.Height = btnCaixa.Height;
            pnlNav.Top = btnCaixa.Top;
            lblModo.Text = "Caixa";
            //listViewResult.Controls.Clear();
            progressBar.Value = 0;
            progressBar.Text = progressBar.Value.ToString() + "%";
            listBoxResult.Items.Clear();
            btnCaixa.BackColor = Color.FromArgb(46, 51, 73);
        }

        private void btnGer_Click(object sender, EventArgs e)
        {
            pnlNav.Height = btnGer.Height;
            pnlNav.Top = btnGer.Top;
            lblModo.Text = "Gerência";
            //listViewResult.Controls.Clear();
            progressBar.Value = 0;
            progressBar.Text = progressBar.Value.ToString() + "%";
            listBoxResult.Items.Clear();
            btnGer.BackColor = Color.FromArgb(46, 51, 73);
        }

        private void btnDash_Leave(object sender, EventArgs e)
        {
            btnDash.BackColor = Color.White;
        }

        private void btnCaixa_Leave(object sender, EventArgs e)
        {
            btnCaixa.BackColor = Color.White;
        }

        private void btnGer_Leave(object sender, EventArgs e)
        {
            btnGer.BackColor = Color.White;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            System.Windows.Forms.Application.ExitThread();
        }

        private void btnChek_Click(object sender, EventArgs e)
        {
            listBoxResult.Controls.Clear();
            listBoxResult.Items.Clear();
            progressBar.Value = 0;
            progressBar.Text = progressBar.Value.ToString() + "%";
            switch (lblModo.Text)
            {
                case "Escritório":
                    escritorioCheck();
                    break;
                case "Caixa":
                    break;
                case "Gerência":
                    break;
            }
        }

        public void escritorioCheck()
        {
            string displayName;
            string displayVersion;
            string sProgramName = "Carsybde v. 1.1";
            string regkey = @"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall";
            List<string> list = new List<string>();
            List<string> listProgram = new List<string> { "7-Zip", "Carsybde", "Google Drive", "CutePDF", "FortiClient VPN", "Java", "LibreOffice", "Adobe", "Acrobat Reader DC", "SAP GUI for Windows", "McAfee Agent"};
            int i = 0;
            string[] teste = {};
            string[] teste1 = {};
            RegistryKey key;
            // search in: LocalMachine_64
            List<String> source = new List<string> { "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall", "SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall"};
            foreach (var s in source)
            {
                key = Registry.LocalMachine.OpenSubKey($@"{s}");
                foreach (String keyName in key.GetSubKeyNames())
                {
                    RegistryKey subkey = key.OpenSubKey(keyName);
                    displayName = subkey.GetValue("DisplayName") as string;
                    displayVersion = subkey.GetValue("DisplayVersion") as string;
                    if (displayName != null)
                    {
                        if (displayVersion == null)
                        {
                            list.Add(displayName);
                            //listBoxResult.Items.Add(displayName);
                        }
                        else
                        {
                            list.Add(displayName + " Versão " + displayVersion);
                            //listBoxResult.Items.Add(displayName + " Versão " + displayVersion);
                        }

                    }
                }
            }

           for(int g = 0; g < listProgram.Count; g++)
            {   
                if (!list.Exists(e => e.Contains(listProgram[g])))
                {
                    listBoxResult.Items.Add(listProgram[g]);
                }
            }
            
            for (int f = 0; f < list.Count; f++)
            {
                //listBoxResult.Items.Add(list[f]);


                //if ((list[f]).Contains("7-Zip"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("Carsybde"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("Google Drive"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("CutePDF"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("FortiClient VPN"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("Java"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("LibreOffice"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("Adobe Acrobat Reader DC"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("SAP GUI for Windows"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
                //else if ((list[f]).Contains("McAfee Agent"))
                //{
                //    listBoxResult.Items.Add(list[f]);
                //}
            }
            using (RegistryKey keyf = Registry.LocalMachine.OpenSubKey(regkey))
            {
            //    var query = from a in
            //                     key.GetSubKeyNames()
            //                let r = key.OpenSubKey(a)                            
            //                select new
            //                {
            //                    Application = r.GetValue("DisplayName")                               
            //                };
            //    var queryy = from b in
            //                     key.GetSubKeyNames()
            //                 let t = key.OpenSubKey(b)
            //                 select new
            //                 {
            //                     Applicationn = t.GetValue("DisplayVersion")
            //                 };
            //    foreach (var item in query)
            //    {
            //        if (item.Application != null)
            //            list.Add(item.Application.ToString());
            //            // if (item.Application.Equals("Google Drive"))
            //            //{                        
            //           // listBoxResult.Items.Add(list);
            //            //}

            //    }
            //    foreach (var item1 in queryy)
            //    {

            //        if (item1.Applicationn != null)
            //        {
            //            list1.Add(item1.Applicationn.ToString());
            //        }

            //            // if (item.Application.Equals("Google Drive"))
            //            //{

            //            //listBoxResult.Items.Add(teste1);

            //        //}

            //    }

            //    for (int f = 0;f< list1.Count; f++)
            //    {   

            //        listBoxResult.Items.Add(list1[f]);
            //    }
            //    //listBoxResult.Items.Add(teste);

            }

            string path = "C:\\Program Files\\";
            bool result = Directory.Exists(path);
           

            path = "C:\\Program Files\\Google\\Chrome\\Application";
            result = Directory.Exists(path);
            progressBar.Value += 10;
            progressBar.Text = progressBar.Value.ToString() + "%";
            if (result != true)
            {                
               // listBoxResult.Items.Add("Chrome");               
            }                 
                               
            path = "C:\\app\\product\\11.2.0";
            result = Directory.Exists(path);
            progressBar.Value += 5;
            progressBar.Text = progressBar.Value.ToString() + "%";
            if (result != true)
            {
               
                listBoxResult.Items.Add("Oracle Net Manager");
               
            }                      

            path = "C:\\oracle";
            result = Directory.Exists(path);
            progressBar.Value += 5;
            progressBar.Text = progressBar.Value.ToString() + "%";
            if (result != true)
            {
                listBoxResult.Items.Add("Pasta Oracle");               
            }            

            path = "C:\\Windows\\Bemol.ini";
            result = File.Exists(path);
            progressBar.Value += 5;
            progressBar.Text = progressBar.Value.ToString() + "%";
            if (result != true)
            {                
                listBoxResult.Items.Add("Bemol.ini");               
            }

            


        }

        //Exibe a tela com as instruções desejasda        
        private void listBoxResult_SelectedIndexChanged(object sender, EventArgs e)
        {
            Programas programas = new Programas();
            string programItem = listBoxResult.SelectedItem.ToString();
            switch (programItem)
            {
                case "7-Zip":
                    if (Application.OpenForms.Count == 1)
                    {                                              
                        programas.Show();
                        programas.Imagens("7-zip");
                        programas.AbrirForm();
                    }                    
                    break;
                case "McAfee":
                    //listBoxResult.Items.Add("McAfee pode ser encontrado em \\srvlandeskdb\\App");
                    break;

            }
        }

        //Move a janela 
        private void start_MouseDown(object sender, MouseEventArgs e)
        {
            dragging = true;
            startPoint = new Point(e.X, e.Y);
        }

        private void start_MouseUp(object sender, MouseEventArgs e)
        {
            dragging = false;
        }

        private void start_MouseMove(object sender, MouseEventArgs e)
        {
            if(dragging)
            {
                Point p = PointToScreen(e.Location);
                Location = new Point(p.X - this.startPoint.X, p.Y - this.startPoint.Y);
            }
        }

        
    }
}
